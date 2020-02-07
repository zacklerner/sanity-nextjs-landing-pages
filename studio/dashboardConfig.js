export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5e3cba133a3ff76ad93492e9',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-gqtzs4t7',
                  apiId: '1bbb8d05-33e1-456e-9d43-6dc2d399b62f'
                },
                {
                  buildHookId: '5e3cba14b50316354fc07555',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-h68ovxen',
                  apiId: '8f694a34-d787-43cf-ae71-fb9ad0859931'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/zacklerner/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-h68ovxen.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
