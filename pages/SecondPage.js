import React from 'react';
import withWrap from '../hoc/withWrap';

const SecondPage = ({
    stars
}) => {
    return <div>Next stars: {stars}</div>
}

// example from nextjs doc
SecondPage.getInitialProps = async () => {
    const res = await fetch('https://api.github.com/repos/vercel/next.js')
    const json = await res.json()
    return { stars: json.stargazers_count }
}

export default withWrap(SecondPage);
