import React from 'react';

import {
  Rental as RentalView,
  PortfolioGrid as PortfolioGridView,
  CompanyTerms as CompanyTermsView,
  ContactPageSidebarMap as ContactPageSidebarMapView,
  ContactPageCover as ContactPageCoverView,
  About as AboutView,
  AboutSideCover as AboutSideCoverView,
  Pricing as PricingView,
  BlogSearch as BlogSearchView,
  BlogNewsroom as BlogNewsroomView,
  BlogArticle as BlogArticleView,
  BlogReachView as BlogReachViewView,
  PasswordResetCover as PasswordResetCoverView,
  PasswordResetSimple as PasswordResetSimpleView,
  SigninSimple as SigninSimpleView,
  SigninCover as SigninCoverView,
  SignupSimple as SignupSimpleView,
  SignupCover as SignupCoverView,
  AccountBilling as AccountBillingView,
  AccountGeneral as AccountGeneralView,
  AccountNotifications as AccountNotificationsView,
  AccountSecurity as AccountSecurityView,
  NotFound as NotFoundView,
  NotFoundCover as NotFoundCoverView,
} from './index';

const routes = [
  {
    path: '/',
    renderer: (params = {}): React.ReactElement => <RentalView {...params} />,
  },
  {
    path: '/portfolio-grid',
    renderer: (params = {}): React.ReactElement => <PortfolioGridView {...params} />,
  },
  {
    path: '/company-terms',
    renderer: (params = {}): React.ReactElement => <CompanyTermsView {...params} />,
  },
  {
    path: '/contact-sidebar-map',
    renderer: (params = {}): React.ReactElement => (
      <ContactPageSidebarMapView {...params} />
    ),
  },
  {
    path: '/contact-page-cover',
    renderer: (params = {}): React.ReactElement => (
      <ContactPageCoverView {...params} />
    ),
  },
  {
    path: '/about',
    renderer: (params = {}): React.ReactElement => <AboutView {...params} />,
  },
  {
    path: '/about-side-cover',
    renderer: (params = {}): React.ReactElement => <AboutSideCoverView {...params} />,
  },
  {
    path: '/pricing',
    renderer: (params = {}): React.ReactElement => <PricingView {...params} />,
  },
  {
    path: '/blog-search',
    renderer: (params = {}): React.ReactElement => <BlogSearchView {...params} />,
  },
  {
    path: '/blog-newsroom',
    renderer: (params = {}): React.ReactElement => <BlogNewsroomView {...params} />,
  },
  {
    path: '/blog-article',
    renderer: (params = {}): React.ReactElement => <BlogArticleView {...params} />,
  },
  {
    path: '/blog-reach-view',
    renderer: (params = {}): React.ReactElement => <BlogReachViewView {...params} />,
  },
  {
    path: '/password-reset-cover',
    renderer: (params = {}): React.ReactElement => (
      <PasswordResetCoverView {...params} />
    ),
  },
  {
    path: '/password-reset-simple',
    renderer: (params = {}): React.ReactElement => (
      <PasswordResetSimpleView {...params} />
    ),
  },
  {
    path: '/signin-simple',
    renderer: (params = {}): React.ReactElement => <SigninSimpleView {...params} />,
  },
  {
    path: '/signin-cover',
    renderer: (params = {}): React.ReactElement => <SigninCoverView {...params} />,
  },
  {
    path: '/signup-simple',
    renderer: (params = {}): React.ReactElement => <SignupSimpleView {...params} />,
  },
  {
    path: '/signup-cover',
    renderer: (params = {}): React.ReactElement => <SignupCoverView {...params} />,
  },
  {
    path: '/account-billing',
    renderer: (params = {}): React.ReactElement => <AccountBillingView {...params} />,
  },
  {
    path: '/account-general',
    renderer: (params = {}): React.ReactElement => <AccountGeneralView {...params} />,
  },
  {
    path: '/account-notifications',
    renderer: (params = {}): React.ReactElement => (
      <AccountNotificationsView {...params} />
    ),
  },
  {
    path: '/account-security',
    renderer: (params = {}): React.ReactElement => <AccountSecurityView {...params} />,
  },
  {
    path: '/not-found',
    renderer: (params = {}): React.ReactElement => <NotFoundView {...params} />,
  },
  {
    path: '/not-found-cover',
    renderer: (params = {}): React.ReactElement => <NotFoundCoverView {...params} />,
  },
];

export default routes;