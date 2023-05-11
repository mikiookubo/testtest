export type Error = string | undefined;

export type Action =
  | {
      type: 'showErrorMessage';
    }
  | {
      type: 'changeArticleTitle';
      payload: {
        title: string;
      };
    }
  | {
      type: 'changeArticleDescription';
      payload: {
        description: string;
      };
    };

export type InputForm = {
  shouldShowError: boolean;
  title: {
    value: string;
    errorMessage: Error;
    isDisabled: boolean;
  };
  description: {
    value: string;
    errorMessage: Error;
    isDisabled: boolean;
  };
};

export type RequestBody = {
  user_id: string;
  title: string;
  content: string;
};
