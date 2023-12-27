'use client';
import { useState } from 'react';
import { Datepicker } from 'flowbite-react';
import { RenderBlockControllerProps } from 'visio-cms';

export default function DatePickerController({
  prop,
  propIndex,
  defaultValue,
  handlePropValueChange,
}: RenderBlockControllerProps) {
  return (
    <div className="absolute w-full left-0 px-1 date-picker">
      <Datepicker
        onSelectedDateChanged={(date) => handlePropValueChange(date, propIndex, prop)}
        defaultValue={defaultValue}
      />
    </div>
  );
}
