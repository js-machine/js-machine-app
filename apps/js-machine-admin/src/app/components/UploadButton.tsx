import React, {
  memo,
  useRef,
  useCallback,
  ChangeEvent,
  ReactNode,
} from 'react';

const DEFAULT_ID = 'upload-id';

interface Props {
  id?: string;
  onUpload: (file: File) => void;
  children: ReactNode;
}

export const UploadButton = memo(function UploadButton({
  id = DEFAULT_ID,
  onUpload,
  children,
}: Props) {
  const ref = useRef<HTMLInputElement>(null);

  const handleUpload = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      if (!event.target || !event.target.files || !event.target.files.length) {
        return;
      }

      const file = event.target.files[0];

      onUpload(file);

      // need to clear value after upload to be able reupload the same file
      // https://stackoverflow.com/questions/9155136/chrome-file-upload-bug-on-change-event-wont-be-executed-twice-with-the-same-fi
      if (ref.current && ref.current.value) {
        ref.current.value = '';
      }
    },
    [onUpload],
  );

  return (
    <>
      <input
        style={{ display: 'none' }}
        id={id}
        multiple={false}
        type="file"
        accept=".md"
        onChange={handleUpload}
        ref={ref}
      />
      <label htmlFor={id}>{children}</label>
    </>
  );
});
