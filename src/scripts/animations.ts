import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function initMobileNav(): void {
  const header = document.getElementById('site-header');
  const toggle = document.getElementById('nav-toggle');
  const menu = document.getElementById('mobile-menu');
  const panel = document.getElementById('mobile-menu-panel');
  const backdrop = document.getElementById('mobile-menu-backdrop');
  const closeBtn = document.getElementById('mobile-menu-close');
  const provisionToggle = document.getElementById('mobile-provision-toggle');
  const provisionList = document.getElementById('mobile-provision-list');
  const provisionAccordion = document.getElementById('mobile-provision-accordion');

  if (!toggle || !menu || !panel || !backdrop || !closeBtn) return;

  const syncHeaderOffset = (): void => {
    const utility = document.getElementById('utility-bar');
    const headerHeight = header?.offsetHeight ?? 64;
    const utilityHeight = utility?.offsetHeight ?? 0;
    menu.style.setProperty('--mobile-header-offset', `${utilityHeight + headerHeight}px`);
  };

  const closeProvision = (): void => {
    provisionAccordion?.classList.remove('is-open');
    provisionToggle?.setAttribute('aria-expanded', 'false');
    provisionList?.setAttribute('hidden', '');
  };

  const openMenu = (): void => {
    syncHeaderOffset();
    menu.classList.add('is-open');
    toggle.classList.add('is-open');
    toggle.setAttribute('aria-expanded', 'true');
    toggle.setAttribute('aria-label', 'Close menu');
    menu.setAttribute('aria-hidden', 'false');
    menu.removeAttribute('inert');
    document.body.classList.add('overflow-hidden');
  };

  const closeMenu = (): void => {
    menu.classList.remove('is-open');
    toggle.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open menu');
    menu.setAttribute('aria-hidden', 'true');
    menu.setAttribute('inert', '');
    document.body.classList.remove('overflow-hidden');
    closeProvision();
  };

  toggle.addEventListener('click', () => {
    menu.classList.contains('is-open') ? closeMenu() : openMenu();
  });
  closeBtn.addEventListener('click', closeMenu);
  backdrop.addEventListener('click', closeMenu);

  provisionToggle?.addEventListener('click', () => {
    const expanded = provisionAccordion?.classList.toggle('is-open');
    provisionToggle.setAttribute('aria-expanded', String(Boolean(expanded)));
    if (expanded) provisionList?.removeAttribute('hidden');
    else provisionList?.setAttribute('hidden', '');
  });

  menu.querySelectorAll<HTMLAnchorElement>('[data-mobile-nav-link]').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menu.classList.contains('is-open')) closeMenu();
  });

  window.addEventListener('resize', () => {
    syncHeaderOffset();
    if (window.innerWidth >= 1024 && menu.classList.contains('is-open')) closeMenu();
  });

  syncHeaderOffset();
}

function initProvisionDropdown(): void {
  const trigger = document.getElementById('provision-dropdown-trigger');
  const dropdown = document.getElementById('provision-dropdown');
  if (!trigger || !dropdown) return;

  trigger.addEventListener('click', (e) => {
    e.preventDefault();
    const open = dropdown.classList.toggle('open');
    trigger.setAttribute('aria-expanded', String(open));
  });

  document.addEventListener('click', (e) => {
    if (!dropdown.classList.contains('open')) return;
    if (dropdown.contains(e.target as Node) || trigger.contains(e.target as Node)) return;
    dropdown.classList.remove('open');
    trigger.setAttribute('aria-expanded', 'false');
  });
}

function initHeaderScroll(): void {
  const header = document.getElementById('site-header');
  if (!header) return;
  const onScroll = (): void => header.classList.toggle('scrolled', window.scrollY > 20);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}

function initMotion(): void {
  document.documentElement.classList.add('js-ready');
  if (prefersReducedMotion) {
    document.querySelectorAll<HTMLElement>('[data-reveal]').forEach((el) => el.classList.add('is-revealed'));
    return;
  }

  gsap.registerPlugin(ScrollTrigger);
  const lenis = new Lenis({ lerp: 0.08, smoothWheel: true });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);

  gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((el) => {
    gsap.fromTo(
      el,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none none' },
        onComplete: () => el.classList.add('is-revealed'),
      },
    );
  });
}

initMobileNav();
initProvisionDropdown();
initHeaderScroll();
initMotion();

export {};
