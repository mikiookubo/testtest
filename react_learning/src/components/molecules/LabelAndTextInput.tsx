import React from 'react';
import { TextInput, ErrorMessage } from '../atoms';
type Props = {
  labelTitle: string;
  errorMessage?: string;
} & TextInputProps;

type TextInputProps = React.ComponentProps<typeof TextInput>;

export const LabelAndTextInput: React.FC<Props> = ({
  labelTitle,
  errorMessage,
  ...props
}) => {
  return (
    <div className="mt-6">
      <label>
        {labelTitle}
        <div>
          <TextInput {...props} />
        </div>
      </label>
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </div>
  );
};
