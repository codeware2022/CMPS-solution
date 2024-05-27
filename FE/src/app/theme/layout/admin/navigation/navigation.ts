import { style } from '@angular/animations';
import { ContentChild, Injectable, ViewChild, ViewChildren } from '@angular/core';


export interface NavigationItem {
  id: string;
  title: string;
  type: 'item' | 'collapse' | 'group';
  translate?: string;
  icon?: string;
  hidden?: boolean;
  url?: string;
  classes?: string;
  exactMatch?: boolean;
  external?: boolean;
  target?: boolean;
  breadcrumbs?: boolean;
  function?: any;
  badge?: {
    title?: string;
    type?: string;
  };
  children?: Navigation[];
}

export interface Navigation extends NavigationItem {
  children?: NavigationItem[];
}

const NavigationItems = [
  {
    id: 'navigation',
    title: 'Navigation',
    type: 'group',
    icon: 'icon-navigation',
    children: [
      {
        id: 'dashboard',
        title: 'Dashboard',
        type: 'item',
        url: '/home/dashboard',
        icon: 'feather icon-home',
        class: 'nav-item',
      },  
      {
        id:'ourproducts',
        title:'Our Product',
        type:'collapse',
        icon:'feather icon-package',
        class:'nav-item',
        children:[
          {
            id:'add-our-product',
            title:'Add Our Product',
            type:'item',         
            url: '/home/our-product/add',
          },
          {
            id:'view-our-product',
            title:'View Our Product',
            type:'item',           
            url: '/home/our-product/view',
          }
        ]
      },
      {
        id:'competitor-product',
        title:'Competitor Product',
        type:'collapse',
        icon:'feather icon-command',
        class:'nav-item',
        children:[
          {
            id:'add-competitor-product',
            title:'Add Competitor Product',
            type:'item',
            class:'nav-item',
            url:'/home/competitor-product/add'
          },
          {
            id:'view-competitor-product',
            title:'View Competitor Product',
            type:'item',
            class:'nav-item',
            url:'/home/competitor-product/view'
          }
        ]
      },
      {      
        id: 'team1',
        title: 'Team',
        type: 'collapse',
        icon: 'feather icon-users',
        children: [
              {
                id: 'brandmanager',
                title: 'Brand Manager',
                type: 'item',
                url: '/home/team/brandmanager',
              },
              {
                id: 'brandcoordinator',
                title: 'Brand Coordinator',
                type: 'item',
                url: '/home/team/brandcoordinator',
              },
              {
                id: 'medicalrep',
                title: 'Medical Rep',
                type: 'item',
                url: '/home/team/medicalrep',
              },
              {
                id: 'salesrep',
                title: 'Sales Rep',
                type: 'item',
                url: '/home/team/salesrep',
              },
              {
                id: 'marketingadmin',
                title: 'Marketing Admin',
                type: 'item',
                url: '/home/team/marketingadmin',
              } 
        ],
      },
      {
        id: 'products',
        title: 'Products',
        type: 'collapse',      
        url: '/home/products',
        icon: 'feather icon-home',
        children:[
          {
            id:'add',
            title:'Add',
            type:'collapse',    
            class:'nav-item', 
            children:[
              {
                id:'therapeutic-category',
                title:'Therapeutic Category',
                type:'item',
                url:'/home/products/new-therapeutic-category',
                class:'nav-item'
              },
              {
                id:'sub-therapeutic-category',
                title:'Sub Therapeutic Category',
                type:'item',
                url:'/home/products/Test',
                class:'nav-item'
              },                                   
              {
                id:'product-master-category',
                title:'Product Master Category',
                type:'item',
                url:'/home/products/new-product-master-category',
                class:'nav-item'
              },
              {
                id:'product',
                title: 'Product',
                type:'item',
                url:'/home/products/new-product',
                class:'nav-item'
              },              
              {
                id:'dosageform',
                title:'Dosage Form',
                type:'item',
                url:'/home/products/new-dosage-form',
                classes: 'nav-item',                 
              },
              {
                id:'ingredient',
                title:'Ingredient',
                type:'item',
                url:'/home/products/new-ingredient',
                classes: 'nav-item',                
              },
              {
                id:'manufacturer',
                title:'Manufacturer',
                type:'item',
                url:'/home/products/new-manufacturer',
                class:'nav-item'
              },
              {
                id:'measurementunits',
                title:'Measurement Units',
                type:'item',
                url:'/home/products/new-measurement-units',
                class:'nav-item'
              },
              {
                id:'product-generic',
                title:'Product Generic',
                type:'item',
                url:'/home/products/new-product-generic',
                class:'nav-item'
              }
            ]
          },
          {
            id:'comparision',
            title:'Comparision',
            type:'collapse',
            class:'nav-item',
            children:[
              {
                id:'competitor',
                title:'Competitor wise',
                type:'item',
                class:'nav-item',
                url:'/home/products/competitor-wise',
              },
              {
                id:'competitor',
                title:'Genaric wise',
                type:'item',
                class:'nav-item',
                url:'/home/products/new-therapeutic-category',
              },
              {
                id:'competitor',
                title:'Dosage Form wise',
                type:'item',
                class:'nav-item',
                url:'/home/products/new-therapeutic-category',
              }
            ]
          }
        ]
      },
      {      
        id: 'other',
        title: 'Other',
        type: 'collapse',
        icon: 'feather icon-grid',
        children: [
              {
                id: 'distributor',
                title: 'Distributor',
                type: 'item',
                url: '/home/other/distributor',
              },
              {
                id: 'area',
                title: 'Area',
                type: 'item',
                url: '/home/other/area',
              },
              {
                id: 'range',
                title: 'Range',
                type: 'item',
                url: '/home/other/range',
              },
              {
                id: 'zone',
                title: 'Zone',
                type: 'item',
                url: '/home/other/zone',
              }
        ],
      },
    ],
  },
  {
    id: 'ui-element',
    title: 'UI ELEMENT',
    type: 'group',
    icon: 'icon-ui',
    children: [
      {
        id: 'basic',
        title: 'Component',
        type: 'collapse',
        icon: 'feather icon-box',
        children: [
          {
            id: 'button',
            title: 'Button',
            type: 'item',
            url: '/basic/button',
          },
          {
            id: 'badges',
            title: 'Badges',
            type: 'item',
            url: '/basic/badges',
          },
          {
            id: 'breadcrumb-pagination',
            title: 'Breadcrumb & Pagination',
            type: 'item',
            url: '/basic/breadcrumb-paging',
          },
          {
            id: 'collapse',
            title: 'Collapse',
            type: 'item',
            url: '/basic/collapse',
          },
          {
            id: 'tabs-pills',
            title: 'Tabs & Pills',
            type: 'item',
            url: '/basic/tabs-pills',
          },
          {
            id: 'typography',
            title: 'Typography',
            type: 'item',
            url: '/basic/typography',
          },
        ],
      },
    ],
  },
  {
    id: 'forms',
    title: 'Forms & Tables',
    type: 'group',
    icon: 'icon-group',
    children: [
      {
        id: 'forms-element',
        title: 'Form Elements',
        type: 'item',
        url: '/forms/basic',
        classes: 'nav-item',
        icon: 'feather icon-file-text',
      },
      {
        id: 'tables',
        title: 'Tables',
        type: 'item',
        url: '/tables/bootstrap',
        classes: 'nav-item',
        icon: 'feather icon-server',
      },
    ],
  },
  {
    id: 'chart-maps',
    title: 'Chart',
    type: 'group',
    icon: 'icon-charts',
    children: [
      {
        id: 'apexChart',
        title: 'ApexChart',
        type: 'item',
        url: 'apexchart',
        classes: 'nav-item',
        icon: 'feather icon-pie-chart',
      },
    ],
  },
  {
    id: 'pages',
    title: 'Pages',
    type: 'group',
    icon: 'icon-pages',
    children: [
      {
        id: 'auth',
        title: 'Authentication',
        type: 'collapse',
        icon: 'feather icon-lock',
        children: [
          {
            id: 'signup',
            title: 'Sign up',
            type: 'item',
            url: '/auth/signup',
            target: true,
            breadcrumbs: false,
          },
          {
            id: 'signin',
            title: 'Sign in',
            type: 'item',
            url: '/auth/signin',
            target: true,
            breadcrumbs: false,
          },
        ],
      },
      {
        id: 'sample-page',
        title: 'Sample Page',
        type: 'item',
        url: '/sample-page',
        classes: 'nav-item',
        icon: 'feather icon-sidebar',
      },
      {
        id: 'disabled-menu',
        title: 'Disabled Menu',
        type: 'item',
        url: 'javascript:',
        classes: 'nav-item disabled',
        icon: 'feather icon-power',
        external: true,
      },
      {
        id: 'buy_now',
        title: 'Buy Now',
        type: 'item',
        icon: 'feather icon-book',
        classes: 'nav-item',
        url: '',
        target: true,
        external: true,
      },
    ],
  },
];

@Injectable()
export class NavigationItem {
  get() {
    return NavigationItems;
  }
}
