
class ElementMap extends HTMLElement
{
    constructor  ()
    {
        super();
        var TypeDevice = this.getAttribute('DeviceType');
        switch (TypeDevice)
        {
            case 'Server':
                this.style.backgroundImage = "url('http://127.0.0.1:5500/JsWebCompanent/ElementMap/Network-server.svg')";                
                this.style.transition = "0.5s";
                this.style.position = "absolute";
                this.style.top = "50%";
                this.style.left = "50%";
                this.style.width = "50px";
                this.style.height = "50px";
            break;

        }
        
        
        }
}

customElements.define('element-map', ElementMap);