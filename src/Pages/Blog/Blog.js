import React from 'react';

const Blog = () => {
    return (
        <div className='container'>
            <div className='mt-3 m-b-3'>
                <h1># Difference between javascript and nodejs?</h1>
                <h6>
                    1.JavaScript is a simple programming language that runs in any browser JavaScript Engine. Whereas Node JS is an interpreter or running environment for a JavaScript programming language that holds many excesses, it requires libraries that can easily be accessed from JavaScript programming for better use.

                </h6>
                <h6>2.JavaScript is normally used for any client-side activity for one web application. An activity can be addressing business validation or dynamic page display in some schedule time interval or basic Ajax call kind of task. Those are used for a maximum time for any web application. Whereas Node JS mainly used for accessing or running any operating system for non-blocking operation. An operation like creating or executing a shell script, or getting some specific hardware-related information on one call or installed certificate details in the system or a lot of define task is non-blocking on an operating system.
                </h6>
                <h6>3.JavaScript running in any engine like Spider monkey (FireFox), JavaScript Core (Safari), V8 (Google Chrome). So JavaScript programming is very easy to write, and put any running environment means proper browser. Whereas Node JS only support the V8 engine, which googles chrome specific. But whether it supports the V8 engine, written JavaScript code can able to run in any environment. So there has no browser-specific constraint on it.
                </h6>
            </div>
            <div className='mt-3'>
                <h1># Differences between sql and nosql databases.</h1>
                <h6>1.SQL databases are relational, NoSQL databases are non-relational.</h6>
                <h6>2.SQL databases use structured query language and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data.</h6>
                <h6>3.SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.</h6>
                <h6>4.SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores.</h6>
                <h6>5.SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</h6>
            </div>
            <div>
                <h1>#  What is the purpose of jwt and how does it work</h1>
                <h6>1.Authorization: This is the most common scenario for using JWT. Once the user is logged in, each subsequent request will include the JWT, allowing the user to access routes, services, and resources that are permitted with that token. Single Sign On is a feature that widely uses JWT nowadays, because of its small overhead and its ability to be easily used across different domains.</h6>
                <h6>2.Information Exchange: JSON Web Tokens are a good way of securely transmitting information between parties. Because JWTs can be signed—for example, using public/private key pairs—you can be sure the senders are who they say they are. Additionally, as the signature is calculated using the header and the payload, you can also verify that the content hasn't been tampered with.</h6>
            </div>
        </div>
    );
};

export default Blog;