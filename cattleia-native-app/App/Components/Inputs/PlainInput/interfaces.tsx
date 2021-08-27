import {TextInputChangeEventData, NativeSyntheticEvent} from 'react-native';

export interface IEmail {
  label: string;
  handler: (e: NativeSyntheticEvent<TextInputChangeEventData>) => void;
  value: any;
}
