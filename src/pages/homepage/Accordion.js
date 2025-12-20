import React, { useState } from 'react';
import AccordionItem from './AccordionItem';

const AccordionData = [
    { title: 'Lesson 1.', wrap: 'Aliquet lectus urna viverra in odio.', content: 'Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare. Lacus facilisi curabitur turpis varius mauris. Nisi, tempus risus, odio mi suscipit sed. Curabitur faucibus porttitor quis sem lacus, arcu feugiat facilisis. Commodo nunc orci vitae accumsan id.' },
    { title: 'Lesson 2.', wrap: 'Orci commodo, viverra orci mollis ut euismod.', content: 'Ipsum aspernatur officiis, obcaecati modi excepturi, consectetur adipisicing elit. Inventore porro molestiae nihil ad aut atque tempora tempore fugiat ipsum aspernatur officiis, obcaecati modi excepturi, aliquid reprehenderit? Sint ullam magni molestias?' },
    { title: 'Lesson 3.', wrap: 'Sagittis vitae facilisi rutrum amet mauris quisque vel.', content: 'Doloribus quo sed beatae provident placeat voluptate corporis eligendi maxime laborum reprehenderit voluptatibus obcaecati recusandae illum, delectus ipsum ab vitae cum excepturi? Illo ad id mollitia, sit obcaecati qui laborum iste minima deserunt consequatur sunt neque aliquid, error aspernatur!', },
    { title: 'Lesson 4.', wrap: 'In id dolor quis nunc, urna hendrerit pharetra.', content: 'Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare. Lacus facilisi curabitur turpis varius mauris. Nisi, tempus risus, odio mi suscipit sed. Curabitur faucibus porttitor quis sem lacus, arcu feugiat facilisis. Commodo nunc orci vitae accumsan id.' },
    { title: 'Lesson 5.', wrap: 'Est, ut tempus id rutrum facilisi.', content: 'Doloribus quo sed beatae provident placeat voluptate corporis eligendi maxime laborum reprehenderit voluptatibus obcaecati recusandae illum, delectus ipsum ab vitae cum excepturi? Illo ad id mollitia, sit obcaecati qui laborum iste minima deserunt consequatur sunt neque aliquid, error aspernatur!', },
    { title: 'Lesson 6.', wrap: 'Amet nec in pellentesque.', content: 'Ipsum aspernatur officiis, obcaecati modi excepturi, consectetur adipisicing elit. Inventore porro molestiae nihil ad aut atque tempora tempore fugiat ipsum aspernatur officiis, obcaecati modi excepturi, aliquid reprehenderit? Sint ullam magni molestias?' },
    { title: 'Lesson 7.', wrap: 'Massa vel arcu mauris, id vel rhoncus mattis quis.', content: 'Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare. Lacus facilisi curabitur turpis varius mauris. Nisi, tempus risus, odio mi suscipit sed. Curabitur faucibus porttitor quis sem lacus, arcu feugiat facilisis. Commodo nunc orci vitae accumsan id.', },
    { title: 'Lesson 8.', wrap: 'Neque, cursus sapien nullam id.', content: 'Doloribus quo sed beatae provident placeat voluptate corporis eligendi maxime laborum reprehenderit voluptatibus obcaecati recusandae illum, delectus ipsum ab vitae cum excepturi? Illo ad id mollitia, sit obcaecati qui laborum iste minima deserunt consequatur sunt neque aliquid, error aspernatur!', },
];

const Accordion = () => {
    const [expandedIndex, setExpandedIndex] = useState(null);
    const handleToggle = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <div className="accordion-container">
            {AccordionData.map((item, index) => (
                <AccordionItem
                    key={index}
                    wrap={item.wrap}
                    title={item.title}
                    content={item.content}
                    isOpen={expandedIndex === index}
                    onClick={() => handleToggle(index)}
                />
            ))}
        </div>
    );
};

export default Accordion;