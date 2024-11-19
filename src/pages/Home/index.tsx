import { PageContainer } from '@ant-design/pro-components';
import * as monaco from 'monaco-editor';
import { useEffect, useRef, useState } from 'react';

const HomePage: React.FC = () => {
  const [editor, setEditor] =
    useState<monaco.editor.IStandaloneCodeEditor | null>(null);
  const monacoEl = useRef(null);

  useEffect(() => {
    if (monacoEl) {
      setEditor((editor) => {
        if (editor) return editor;

        return monaco.editor.create(monacoEl.current!, {
          value: ['function x() {', '\tconsole.log("Hello world!");', '}'].join(
            '\n',
          ),
          language: 'typescript',
        });
      });
    }

    return () => editor?.dispose();
  }, [monacoEl.current]);

  return (
    <PageContainer ghost>
      <div ref={monacoEl} style={{ width: '800px', height: '500px' }}></div>
    </PageContainer>
  );
};

export default HomePage;
