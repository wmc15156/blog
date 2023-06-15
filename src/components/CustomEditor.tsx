'use client';
import styled from '@emotion/styled';
import dynamic from 'next/dynamic';

const MDEditor = dynamic(() => import('@uiw/react-md-editor'), { ssr: false });
import React from 'react';
import { css } from '@emotion/react';
import { commands, TextAreaTextApi, TextState } from '@uiw/react-md-editor';
import { ExecuteState, ICommand } from '@uiw/react-md-editor/src/commands';
import awk from 'refractor/lang/awk';

commands.codeBlock.icon = (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 24 24"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"></path>
  </svg>
);

const image = {
  name: 'image',
  keyCommand: 'image',
  buttonProps: { 'aria-label': 'Insert image' },
  icon: (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 24 24"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"></path>
    </svg>
  ),
  execute: async (state: ExecuteState, api: TextAreaTextApi) => {
    const imageUrl = await showImageUploadComponent();
    console.log(imageUrl, 'imageUrl');
    let modifyText = `\n![](${imageUrl})\n`;
    api.replaceSelection(modifyText);

    console.log('image', imageUrl);
  },
};

const link: ICommand = {
  ...commands.link,
  name: 'link',
  keyCommand: 'link',
  shortcuts: 'ctrlcmd+l',
  value: '[{{text}}](URL Here)',
  buttonProps: { 'aria-label': 'Add a link (ctrl + l)', title: 'Add a link (ctrl + l)' },
  icon: (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 24 24"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"></path>
    </svg>
  ),
};

const title1 = {
  ...commands.title1,
  icon: (
    <div style={{ fontSize: '18px', padding: '5px' }}>
      H<span>1</span>
    </div>
  ),
};
const title2 = {
  ...commands.title2,
  icon: (
    <div style={{ fontSize: '18px', padding: '5px' }}>
      H<span>2</span>
    </div>
  ),
};

const title3 = {
  ...commands.title3,
  icon: (
    <div style={{ fontSize: '18px', padding: '5px' }}>
      H<span>3</span>
    </div>
  ),
};

const title4 = {
  ...commands.title4,
  icon: (
    <div style={{ fontSize: '18px', padding: '5px' }}>
      H<span>4</span>
    </div>
  ),
};

const bold = {
  ...commands.bold,
  icon: (
    <svg
      stroke="currentColor"
      fill="currentColor"
      stroke-width="0"
      viewBox="0 0 24 24"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M15.6 10.79c.97-.67 1.65-1.77 1.65-2.79 0-2.26-1.75-4-4-4H7v14h7.04c2.09 0 3.71-1.7 3.71-3.79 0-1.52-.86-2.82-2.15-3.42zM10 6.5h3c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-3v-3zm3.5 9H10v-3h3.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z"></path>
    </svg>
  ),
};
const italic = {
  ...commands.italic,
  icon: (
    <svg
      stroke="currentColor"
      fill="currentColor"
      stroke-width="0"
      viewBox="0 0 24 24"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10 4v3h2.21l-3.42 8H6v3h8v-3h-2.21l3.42-8H18V4z"></path>
    </svg>
  ),
};

const strikethrough = {
  ...commands.strikethrough,
  icon: (
    <svg
      stroke="currentColor"
      fill="currentColor"
      stroke-width="0"
      viewBox="0 0 24 24"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10 19h4v-3h-4v3zM5 4v3h5v3h4V7h5V4H5zM3 14h18v-2H3v2z"></path>
    </svg>
  ),
};

const StyledButton = styled.button`
  background-color: blue;
  color: white;
  font-size: 16px;
  padding: 8px 16px;
`;
const iconStyle = css`
  font-size: 24px;
`;

const DivContainer = styled.div`
  .w-md-editor-toolbar {
    height: 60px;

    > ul:first-child {
      height: 100% !important;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;
      > li > button {
        font-size: 30px !important;
        height: 100%;
      }
    }
    //> ul:last-child {
    //  display: none !important;
    //}
  }
  .w-md-editor-text-pre > code,
  .w-md-editor-text-input {
    font-size: 18px !important;
    line-height: 18px !important;
  }
  .rd-md-navigation-toolbar button,
  .rd-md-navigation-toolbar input {
    height: 40px;
    padding: 8px 12px;
  }

  .rd-md-navigation-toolbar .rd-md-navigation-toolbar-button {
    font-size: 24px;
  }
`;

const showImageUploadComponent = () => {
  return new Promise((resolve) => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    let imageResult = '';
    input.addEventListener('change', async () => {
      if (input.files && input.files.length > 0) {
        const file = input.files[0];

        console.log(file, 'file');
        const formData = new FormData();
        formData.append('image', file);

        const result = await fetch('http://localhost:8080/upload/image', {
          method: 'POST',
          body: formData,
        });
        if (result.ok) {
          const responseBody = (await result.json()) as { image: string };
          imageResult = responseBody.image;
        }
        resolve(imageResult); // resolve 함수 호출하여 Promise 해결
      }
    });
    input.click();
  });
};

export default function CustomEditor() {
  const [value, setValue] = React.useState(
    '# dasdasdasdasd\n' + '\n' + '```js\n' + 'data\n' + '\n' + '``` '
  );
  const onChangeText = (e: string | undefined) => {
    console.log(e, '123123');
    if (e || e === '') {
      setValue(e);
    }
  };

  console.log(value, 'value');

  return (
    <DivContainer className="custom-editor-container">
      <MDEditor
        value={value}
        onChange={onChangeText}
        className="custom-editor-textarea"
        fullscreen={true}
        data-color-mode="dark"
        toolbarHeight={4000}
        style={{ whiteSpace: 'pre-wrap' }}
        preview="live" // live, preview , edit
        commands={[
          title1,
          title2,
          title3,
          title4,
          commands.divider,
          bold,
          italic,
          strikethrough,
          commands.divider,
          commands.codeBlock,
          image,
          link,
        ]}
      />
    </DivContainer>
  );
}
