import React from 'react';
import Article from './Article';
export default function ArticleList({posts}) {
    const articleElements = posts.map((article) => {
        return (
            <Article 
                key={article.id}
                title={article.title}
                date={article.date}
                preview={article.preview}
            />
        )
    })
    return (
     <main>
      {articleElements} 
     </main>
    )
}