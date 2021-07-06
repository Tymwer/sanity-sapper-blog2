export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60e3ffde17a2763c5c288750',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blog-2-studio-j3jkx3tf',
                  apiId: '05a5fed8-fc83-47c8-9f09-22e19039368f'
                },
                {
                  buildHookId: '60e3ffdf2ad04e623ee5e8b2',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blog-2-web-sie1g89c',
                  apiId: '6dbffc69-64d8-47bc-af95-a2fbac9783f3'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Tymwer/sanity-sapper-blog2',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-blog-2-web-sie1g89c.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
