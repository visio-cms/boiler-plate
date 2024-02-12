import { Block } from 'visio-cms';
import Hero from '@/components/blocks/hero';

import { ButtonIcon, FileIcon, HamburgerMenuIcon, ImageIcon, LayersIcon, SunIcon } from '@radix-ui/react-icons';
import { Box, Grid, Image, RectangleHorizontalIcon, SheetIcon, Table2Icon, Type } from 'lucide-react';

import ContactForm from '@/components/blocks/contact-form';
import Metrics from '@/components/blocks/metics';
import Header from '@/components/blocks/header';
import WorkWithUs from '@/components/blocks/work-with-us';
import Collections from '@/components/blocks/collections';
import Features from '@/components/blocks/features';
import NewsLetter from '@/components/blocks/newsLetter';
import Footer from '@/components/blocks/footer';
import LoginForm from '@/components/blocks/login-form';
import MyFirstBlock from '@/components/blocks/MyFirstBlock';
import DatePickerController from './controllers/DatePickerController';
import Text from './blocks/text';
import ImageBox from './blocks/image';
import ButtonBlock from './blocks/button';
const registeredBlocks: Block[] = [
  {
    component: MyFirstBlock,
    title: 'My First Block',
    icon: <ImageIcon />,
    category: 'Sections',
    defaultInputs: {
      title: 'This is my first title',
      subTitle:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      image: {},
      alignment: 'left',
    },
    controllers: [
      { name: 'title', type: 'text', label: 'Title' },
      { name: 'subTitle', type: 'richText', label: 'Sub Title' },
      { name: 'image', type: 'image', label: 'Side Image' },
      {
        name: 'alignment',
        type: 'radioGroup',
        label: 'Alignment',
        options: [
          {
            label: 'Left',
            value: 'left',
          },
          {
            label: 'Right',
            value: 'right',
          },
        ],
      },
    ],
    key: 'myFirstBlock',
  },
  {
    component: WorkWithUs,
    title: 'Work with us',
    category: 'Sections',
    icon: <ImageIcon />,
    defaultInputs: { children: 'button' },
    controllers: [
      { name: 'backgroundImage', type: 'image', label: 'Background Image' },
      {
        name: 'date',
        type: 'custom',
        label: 'Choose date',
        controllerComponent: DatePickerController,
      },
    ],
    key: 'workWithus',
  },
  {
    component: Collections,
    title: 'Collections',
    icon: <SunIcon />,
    defaultInputs: { collections: [], title: 'Collections' },
    controllers: [
      { type: 'text', label: 'Tittle', name: 'title' },
      {
        name: 'collections',
        type: 'list',
        label: 'Collections',
        listDisplayedLabels: {
          title: 'link.url',
          caption: 'headline',
          image: 'image',
        },
        schema: [
          { type: 'text', label: 'Tittle', name: 'title' },
          { type: 'text', label: 'HeadLine', name: 'headline' },
          { type: 'link', label: 'Link', name: 'link' },
          { type: 'image', label: 'Image', name: 'image' },
        ],
      },
    ],
    key: 'collections',
  },
  {
    component: Hero,
    title: 'Hero',
    category: 'Heros',
    icon: <LayersIcon />,
    key: 'hero',
    defaultInputs: {
      title: 'This is a hero',
      subTitle:
        'Set the DATABASE_URL in the .env file to point to your existing database. If your database has no tables yet, read https://pris.ly/d/getting-started',
      color: '#FFFFFF',
      alignment: 'left',
      image: {
        path: '',
        width: 100,
        height: 200,
        alt: 'helle world',
        url: 'https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg',
      },
    },
    controllers: [
      { type: 'spacing', label: 'Spacing', name: 'spacing', allowControls: ['margin', 'padding'] },
      { name: 'title', type: 'text', label: 'Title' },
      { name: 'subTitle', type: 'richText', label: 'Sub title' },
      { name: 'color', type: 'colorPicker', label: 'Button Color' },
      { name: 'backgroundColor', type: 'colorPicker', label: 'Background Color' },
      { name: 'image', type: 'image', label: 'Background image' },
    ],
  },
  {
    component: ContactForm,
    title: 'Contact form',
    icon: <FileIcon />,
    key: 'contactForm',
    category: 'Forms',
    defaultInputs: {
      title: 'Contact us',
      subTitle: 'Get in touch with us with just a message',
    },
    controllers: [
      { name: 'title', type: 'text', label: 'Title' },
      { name: 'subTitle', type: 'text', label: 'Sub title' },
    ],
  },
  {
    component: Metrics,
    title: 'Metrics',
    category: 'Heros',
    key: 'metrics',
    icon: <HamburgerMenuIcon />,
    defaultInputs: {
      metrics: [
        { figure: '$119 trillion', caption: 'Assets under holding', key: 'caption2' },
        { figure: '44 million', caption: 'Transactions every 24 hours', key: 'caption3' },
        { figure: '46,000', caption: 'New users annually', key: 'caption5' },
      ],
    },
    controllers: [
      {
        name: 'metrics',
        type: 'list',
        label: 'Items',
        listDisplayedLabels: {
          title: 'figure',
          caption: 'caption',
        },
        schema: [
          { type: 'text', label: 'Figure', name: 'figure' },
          { type: 'text', label: 'Caption', name: 'caption' },
        ],
      },
    ],
  },
  {
    component: Header,
    title: 'Nav bar',
    key: 'navBar',
    icon: <Box />,
    defaultInputs: { navigation: [], logo: {} },
    controllers: [
      { type: 'image', name: 'logo', label: 'Logo' },
      {
        type: 'list',
        name: 'navigation',
        label: 'Navigation',
        listDisplayedLabels: {
          title: 'name', //map title to item[x] name controller
          caption: 'href.url', //map caption to item[x] link controller
        },
        schema: [
          { type: 'text', name: 'name', label: 'Name', allowTranslation: true }, //add text controller
          { type: 'link', name: 'href', label: 'Link' }, //add text controller
          {
            type: 'list',
            name: 'subMenu',
            label: 'Sub Menus',
            listDisplayedLabels: {
              title: 'name',
              caption: 'href.url',
            },
            schema: [
              { type: 'text', name: 'name', label: 'Name', allowTranslation: true },
              { type: 'link', name: 'href', label: 'Link' },
            ],
          },
        ],
      },
    ],
  },
  {
    component: Features,
    title: 'Features',
    icon: <Grid />,
    defaultInputs: {},
    key: 'features',
  },
  {
    component: NewsLetter,
    title: 'News letter',
    category: 'Forms',
    key: 'newsLetter',
    icon: <SheetIcon />,
    defaultInputs: {},
  },
  {
    component: Footer,
    title: 'Footer',
    key: 'footer',
    icon: <RectangleHorizontalIcon />,
    defaultInputs: {},
    controllers: [{ type: 'image', label: 'Logo', name: 'image' }],
  },
  {
    component: LoginForm,
    title: 'Login Form',
    key: 'loginForm',
    icon: <Table2Icon />,
    defaultInputs: {},
    controllers: [],
  },
  {
    component: Text,
    title: 'Text',
    key: 'text',
    icon: <Type />,
    category: 'Content',
    defaultInputs: {
      content: 'This is some dummy data',
    },
    controllers: [{ type: 'richText', label: 'Content', name: 'content', allowTranslation: true }],
  },
  {
    component: ImageBox,
    title: 'Image',
    key: 'image',
    icon: <Image />,
    category: 'Content',
    defaultInputs: {},
    controllers: [{ type: 'image', label: 'Image', name: 'image' }],
  },
  {
    component: ButtonBlock,
    title: 'Button',
    key: 'button',
    icon: <ButtonIcon />,
    defaultInputs: {},
    controllers: [{ type: 'text', label: 'Text', name: 'text' }],
  },
];

export default registeredBlocks;
