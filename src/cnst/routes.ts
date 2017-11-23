export interface Route {
  path: string
  exact?: boolean
  label: string
  component: string
  componentProps?: any
}

export const routes: Route[] = [
  {
    path: '',
    exact: true,
    label: 'fashion/beauty',
    component: 'home-page',
    componentProps: { segment: 'fashion-beauty' },
  },
  {
    path: 'still-life',
    label: 'still life',
    component: 'home-page',
    componentProps: { segment: 'still-life' },
  },
  {
    path: 'interior',
    label: 'interior',
    component: 'home-page',
    componentProps: { segment: 'interior' },
  },
  {
    path: 'contact',
    label: 'contact',
    component: 'contact-page',
  },
]
