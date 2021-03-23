
import * as architecture from 'https://raw.githubusercontent.com/flowaboard/flowaboard/master/front-end/data/architecture/architecture.js';
import * as ui from 'https://raw.githubusercontent.com/flowaboard/flowaboard/master/front-end/ui/export.js'
import { Flow } from 'https://raw.githubusercontent.com/flowaboard/flowaboard/master/front-end/ui/element-group/flow.js'
import { UI } from 'https://raw.githubusercontent.com/flowaboard/flowaboard/master/front-end/data/architecture/ui.js'
import { Database } from 'https://raw.githubusercontent.com/flowaboard/flowaboard/master/front-end/data/architecture/database.js'

var design = new architecture.Design()
design.addProcess(new architecture.Process('js','Process','process'))

const flow = Flow.getNewInstance();
document.body.appendChild(flow)
flow.value=design;
design.subscribe('change',(e)=>{
    flow.handleValueChange()
})
flow.activeWidth="60%"
flow.activeHeight="60%"
