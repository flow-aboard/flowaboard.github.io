

import { Design, DesignElement, FlowDesigns } from 'https://cdn.jsdelivr.net/gh/flowaboard/flowaboard/front-end/flowdesign/design.js';





import FlowAboard from 'https://cdn.jsdelivr.net/gh/flowaboard/flowaboard/front-end/flowaboard.js'

import {DesignElement} from 'https://cdn.jsdelivr.net/gh/flowaboard/flowaboard/front-end/flowdesign/design.js'


const parent = document.body;
const flowly =  new FlowAboard(parent)
const design = await DesignElement.loadDesign('https://cdn.jsdelivr.net/gh/flowaboard/flowaboard/front-end/abstract.js')

const flow = await flowly.load(design)
parent.appendChild(flow)








