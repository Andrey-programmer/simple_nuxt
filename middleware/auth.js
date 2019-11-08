export default ({store, redirect}) => {
    if(!store.getters['hasToken']) {console.log('Нелогин')
        redirect('/login?message=login')
    }
}