import React from 'react';
import { ErrorMessage } from '../atoms';
import { SimpleTextInput } from '../atoms/SimpleTextInput';
type Props = {
  labelTitle?: string;
} & SimpleTextInputProps;

type SimpleTextInputProps = React.ComponentProps<typeof SimpleTextInput>;

export const SimpleLabelAndTextInput: React.FC<Props> = ({
  labelTitle,
  ...props
}) => {
  return (
    <div className="mt-6">
      <label>
        {labelTitle}
        <div>
          <SimpleTextInput {...props} />
        </div>
      </label>
    </div>
  );
};
