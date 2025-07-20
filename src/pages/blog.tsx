import { useEffect, useState } from 'react';

type BlogSettings = {
    title: string;
    description: string;
};

const Blogs = () => {
    const [settings, setSettings] = useState<BlogSettings | null>(null);


    useEffect(() => {
        // ✅ Detect if running locally or deployed
        const jsonPath = '/content/blogSettings.json';
        fetch(jsonPath)
            .then((res) => res.json())
            .then((data) => setSettings(data))
            .catch(console.error);
    }, []);

    if (!settings) return <p>Loading...</p>;

    return (
        <div style={{ padding: '2rem' }}>
            <h1>{settings.title}</h1>
            <p>{settings.description}</p>
        </div>
    );
};

export default Blogs;
