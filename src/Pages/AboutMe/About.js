import Logo from './Papa.JPG';
import React from 'react';

function About () {
    return (
        <div class="flex w-full">
  <div class="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">content</div>
  <div class="divider divider-horizontal">OR</div>
  <div class="grid h-2 flex-grow card bg-base-300 rounded-box place-items-center">
  <img
                    className="w-1/3"
                    src={Logo}
                    alt="Workflow"
                  />


  </div>
</div>
    )
}

export default About;