export interface IResizableTextArea {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    onFocus: () => void;
}

export interface ICommentOperations {
    cancel: () => void;
    onSubmit?: () => void; //change to require later
}

export interface IProps {
    onSubmit: () => void;
    orderBy?: () => void;
}