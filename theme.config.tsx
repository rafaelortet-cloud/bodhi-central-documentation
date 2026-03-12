export default {
    logo: <span>Bodhi Central Documentation</span>,
    project: {
        link: 'https://github.com/bodhicentral/bodhicentral',
    },
    docsRepositoryBase: 'https://github.com/bodhicentral/bodhicentral-documentation',
    useNextSeoProps() {
        return {
            titleTemplate: '%s – Bodhi Central Documentation'
        }
    }
}