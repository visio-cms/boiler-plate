'use client';
import { DatePickerT } from '@/lib/types';
import { Datepicker } from 'flowbite-react';

export default function DatePickerController({
  onChange,
  defaultValue,
}: {
  onChange: (newValue: any) => void;
  defaultValue: any;
}) {
  return (
    <div className="absolute w-full left-0 px-1 date-picker">
      <Datepicker
        onSelectedDateChanged={(date) => onChange(date)}
        defaultValue={defaultValue}
        // minDate={prop.minDate}
      />
    </div>
  );
}
