class alert_panel extends HTMLElement
    {   
        
        
        NewAlert(Message, TextMessage)
        {
            this.style.right = '20px';
            this.getElementsByTagName('b')[0].innerText = Message;
            this.getElementsByTagName('label')[0].innerText = TextMessage;
        }

        constructor ()
        {
            super();

            var styleelement = this.style;
            this.style.transition = '1s';
            this.style.position = 'fixed';
            this.style.right = '-55%';
            this.style.bottom = '20px';
            this.style.width = '300px';
            this.style.height =  '300px';
            this.style.backgroundColor = 'rgb(151, 151, 151)';
            this.style.boxShadow = '0 0 10px rgb(112, 112, 112)';
            this.style.borderRadius ='5px';

            var button_Cloese_Windo = document.createElement('button');
            button_Cloese_Windo.style.zIndex =  '1';
            button_Cloese_Windo.style.position = 'absolute';
            button_Cloese_Windo.style.top = '0px';
            button_Cloese_Windo.style.right = '0px';
            button_Cloese_Windo.style.height = '15px';
            button_Cloese_Windo.style.border = 'none';
            button_Cloese_Windo.style.borderRadius = '0 5px 0 0';
            button_Cloese_Windo.innerText = 'X';
            button_Cloese_Windo.onclick = function()
            {
                styleelement.right = '-55%';
            }
            this.append(button_Cloese_Windo);

            var ZagalovocMessage = document.createElement('b');
            ZagalovocMessage.style.zIndex = '0';
            ZagalovocMessage.style.position = 'absolute';
            ZagalovocMessage.style.width = '285px';
            ZagalovocMessage.style.height = '40px';
            ZagalovocMessage.style.paddingLeft = '15px';
            ZagalovocMessage.style.paddingTop = '10px';
            ZagalovocMessage.style.borderRadius = '5px 5px 0 0';
            ZagalovocMessage.style.fontSize = '20px';
            ZagalovocMessage.style.fontWeight = '800';
            ZagalovocMessage.style.fontStyle = 'italic';
            ZagalovocMessage.style.backgroundColor = 'rgb(204, 204, 204)'; 
            ZagalovocMessage.innerText = 'ss';
            this.append(ZagalovocMessage);

            var MessageText = document.createElement('label');            
            MessageText.style.position = 'absolute';
            MessageText.style.top = '60px';
            MessageText.style.left = '5px';
            MessageText.style.height = '230px';
            MessageText.style.width = '290px';
            MessageText.style.fontStyle = 'italic';
            MessageText.innerText = 'text';
            this.append(MessageText);

           
        }
        
   
        
    }

document.addEventListener('DOMContentLoaded', function ()
{
    
    customElements.define('alert-panel', alert_panel);
})
