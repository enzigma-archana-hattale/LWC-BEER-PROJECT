import { LightningElement, track } from 'lwc';

export default class Todolist extends LightningElement {
    lastTodiId=2;
    @track 
    todos=[
     {id:1,Description:'hello', Prio},
     {id:2,Description:'hi'}

    ];
}