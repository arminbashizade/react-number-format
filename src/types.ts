import React from 'react';
import { SyntheticEvent } from 'react';

export interface NumberFormatState {
  value?: string;
  numAsString?: string;
  mounted: boolean;
}

export interface NumberFormatValues {
  floatValue: number | undefined;
  formattedValue: string;
  value: string;
}

export enum SourceType {
  event = 'event',
  props = 'prop',
}

export interface SourceInfo {
  event?: SyntheticEvent;
  source: SourceType;
}

export type FormatInputValueFunction = (inputValue: string) => string;
export type RemoveFormattingFunction = (inputValue: string, changeMeta: ChangeMeta) => string;

export interface SyntheticInputEvent extends React.SyntheticEvent<HTMLInputElement> {
  readonly target: HTMLInputElement;
  data: any;
}

export type ChangeMeta = {
  from: {
    start: number;
    end: number;
  };
  to: {
    start: number;
    end: number;
  };
  lastValue: string;
};

export type InputAttributes = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'defaultValue' | 'value'
>;

type NumberFormatProps<Props, BaseType = InputAttributes> = Props &
  Omit<InputAttributes, keyof BaseType> &
  Omit<BaseType, keyof Props | 'ref'> & {
    customInput?: React.ComponentType<BaseType>;
  };

type NumberFormatBase = {
  type?: 'text' | 'tel' | 'password';
  displayType?: 'input' | 'text';
  inputMode?: InputAttributes['inputMode'];
  renderText?: (formattedValue: string, otherProps: Partial<NumberFormatBase>) => React.ReactNode;
  format: FormatInputValueFunction;
  removeFormatting: RemoveFormattingFunction;
  getInputRef?: ((el: HTMLInputElement) => void) | React.Ref<any>;
  value?: number | string | null;
  defaultValue?: number | string | null;
  isNumericString?: boolean;
  onValueChange?: (values: NumberFormatValues, sourceInfo: SourceInfo) => void;
  isAllowed?: (values: NumberFormatValues) => boolean;
  onKeyDown?: InputAttributes['onKeyDown'];
  onMouseUp?: InputAttributes['onMouseUp'];
  onChange?: InputAttributes['onChange'];
  onFocus?: InputAttributes['onFocus'];
  onBlur?: InputAttributes['onBlur'];
  getCaretBoundary: (formattedValue: string) => boolean[];
};

export type NumberFormatBaseProps<BaseType = InputAttributes> = NumberFormatProps<
  NumberFormatBase,
  BaseType
>;

export type InternalNumberFormatBase = Omit<
  NumberFormatBase,
  'format' | 'removeFormatting' | 'getCaretBoundary'
>;

export type NumericFormatProps<BaseType = InputAttributes> = NumberFormatProps<
  InternalNumberFormatBase & {
    thousandSeparator?: boolean | string;
    decimalSeparator?: string;
    allowedDecimalSeparators?: Array<string>;
    thousandsGroupStyle?: 'lakh' | 'wan' | 'none';
    decimalScale?: number;
    fixedDecimalScale?: boolean;
    allowNegative?: boolean;
    allowLeadingZeros?: boolean;
    suffix?: string;
    prefix?: string;
  },
  BaseType
>;

export type PatternFormatProps<BaseType = InputAttributes> = NumberFormatProps<
  InternalNumberFormatBase & {
    format: string;
    mask?: string | string[];
    allowEmptyFormatting?: boolean;
    patternChar?: string;
  },
  BaseType
>;