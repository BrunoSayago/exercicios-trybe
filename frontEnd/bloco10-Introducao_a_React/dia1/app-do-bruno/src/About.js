import React from 'react';

class About extends React.Component {
    render () {
        const skills = ['HTML', 'CSS', 'JavaScript'] // adicione mais habilidades aqui
        const jsxSkills = skills.map((skill) => <li>{skill}</li>) // cria um array de tags <li>
        return <div>
            <h1>Bruno Sayago</h1>
            <p>Meu nome é Bruno, tenho 20 anos, e amo comer.</p>
            <h2>Minhas Habilidades</h2>
            <ul>{jsxSkills}</ul>
        </div>
    }
}

export default About;
