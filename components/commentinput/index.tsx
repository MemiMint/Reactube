import React, { FunctionComponent, useState } from "react";
import { FiList } from "react-icons/fi"
import { useUser } from "../../context"
import { UserPicture } from "../userpicture"
import { ShortButton } from "../buttons"
import { IResizableTextArea, ICommentOperations, IProps } from "./IProps"

const ResizableTextArea: FunctionComponent<IResizableTextArea> = ({
    value,
    onChange,
    onFocus
}): JSX.Element => {
    const [rows, setRows] = useState<number>(1);
    const [minRows] = useState<number>(1);
    const [maxRows] = useState<number>(100);
    
    const handleRows = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
        const textareaLineHight = 24;
        const previousRows = event.target.rows;
        
        event.target.rows = minRows;    
        
        const currentRows = ~~(event.target.scrollHeight / textareaLineHight);

        if (currentRows === previousRows) event.target.rows = currentRows;

        else if (currentRows === maxRows) {
            event.target.rows = maxRows;
        }

        setRows(currentRows < maxRows ? currentRows : maxRows);
    }

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
        onChange(event);
        handleRows(event);
    }

    return (
        <textarea
            rows={rows}
            className="w-full overflow-none overscroll-none h-auto outline-none p-2 text-sm text-gray-600 placeholder-gray-400 font-medium border-b border-gray-300 resize-none focus:border-black"
            placeholder="add a new comment"
            name="comment"
            value={value}
            onFocus={onFocus}
            onChange={handleChange}
        />
    )
} 

const CommentOperations: FunctionComponent<ICommentOperations> = ({
    cancel,
    onSubmit
}): JSX.Element => {
    return (
        <div className="mt-4 flex items-center justify-end space-x-4">
            <div className="px-8 py-2 text-base font-medium text-gray-500 cursor-pointer hover:bg-gray-300" onClick={cancel}>Cancel</div>
            <ShortButton  
                text="Submit"
                color="green"
                onClick={onSubmit}
            />
        </div>
    )
}

export const CommentInput: FunctionComponent<IProps> = ({
    onSubmit,
    orderBy
}): JSX.Element => {
    const [comment, setComment] = useState<string>("");
    const [showCommentOperations, setShowCommentOperations] = useState<boolean>(false);

    const { picture } = useUser();

    const onChange = (event:React.ChangeEvent<HTMLTextAreaElement>): void => {
        const { value } = event.target;
        setComment(value);
    }

    return (
        <div className="mt-8" >
            <div className="flex items-center justify-between text-gray-600 font-medium mb-4">
                <h1>1,485 comments</h1>
                <div className="flex items-center space-x-2 cursor-pointer">
                    <FiList size={20} />
                    <p>Order By</p>
                </div>
            </div>
            <div className="flex items-center space-x-4">
                <UserPicture
                    picture={picture}
                    width={40}
                    height={40}
                />
                <ResizableTextArea
                    value={comment}
                    onChange={onChange}
                    onFocus={() => setShowCommentOperations(true)}
                />
            </div>
            {showCommentOperations && <CommentOperations cancel={() => setShowCommentOperations(false)} onSubmit={onSubmit} />}
        </div>
    )
}