import React from 'react';
import Image from './profile/ProfilPhoto.js';
import Adresse from './profile/Address.js';
import Name from './profile/FullName.js';
export default function Main() {
    return (
     <div>
          <h1 className="main">Mon profile</h1>
    <Image/>
    <Name/>
    <Adresse/>
    </div>
    )
}
