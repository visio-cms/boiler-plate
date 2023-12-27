import { ComponentType } from 'react';

export type DatePickerT = {
  type: 'datePicker';
};

export type CustomControllerT = DatePickerT

export type CustomControllerType = CustomControllerT & {
  component: ComponentType<any>;
};