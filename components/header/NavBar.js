import Link from 'next/link';

const linksArray = [
    {
        href: '/',
        text: 'home'
    },
    {
        href: '/SecondPage',
        text: 'secondPage'
    }
];

const users = [
    'terry',
    'terry1',
    'terry2'
];

const NavBar = (props) => {

    return (
        <nav className="navbar">
            <ul>
                { // basic url
                    linksArray.map((link, idx) => {
        
                        return <li
                            key={idx}
                        >
                            <Link href={link.href}>
                                <a>
                                    {link.text}
                                </a>
                            </Link>
                        </li>;
        
                    })
                }
                { // user test
                    users.map((user, idx) => {
        
                        return <li
                            key={idx}
                        >
                            <Link
                                href={{
                                    pathname: `/User`,
                                    query: {
                                        name: user
                                    }
                                }}
                                as={`/user-${user}`}
                            >
                                <a>
                                    {user}
                                </a>
                            </Link>
                        </li>;
        
                    })
                }
                {props.children}

            </ul>
        </nav>
    );

};

export default NavBar;
