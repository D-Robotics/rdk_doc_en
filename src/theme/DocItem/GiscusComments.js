import React from 'react';
import Giscus from '@giscus/react';

function GiscusComments() {
  return (
        <Giscus
         repo="D-Robotics/rdk_doc_en"
         repoId="R_kgDOMBMkcg"

        //  repoId="806560652"
         category="General"
        //  categoryId="42103519"
         categoryId="DIC_kwDOMBMkcs4Cgpa4"

         mapping="pathname"
         reactionsEnabled="1"
         emitMetadata="1"
         inputPosition="top"
         theme="light"
         lang="en"
         loading="auto"
          />
        );
      }


export default GiscusComments;