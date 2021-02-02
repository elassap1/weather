import {create, multiCreate} from './newElements.js'

const form = () =>{

create(['div'],1,'','',[['id']],[['contenaire']],'body');

create(['div'],1,['Get Weather'],['title'],[''],[''],'#contenaire');

create(['div'],1,'','',[['id']],[['form']],'#contenaire');


// muti tags
multiCreate(['labale','input','button'],[`City`,``,'Submit'],''

            // add attribute name
            ,[['for','class'],['name','placeholder','id'],['id']]

            // add attribute value
            ,[['city','city'],['city','Type City','city'],['submit']],'#form');

}

export default form;