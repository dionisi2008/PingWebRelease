class KernelCode
{
    constructor ()
    {
        this.LoginUser;
        this.PasswordUser;
        this.Session;
        this.NewAlert = document.getElementsByTagName('alert-panel')[0].NewAlert;
    }

    UserAuthenticationInTheSystem(LoginUser, PasswordUser)
    {
        //Проверка на нормальность логина и пароля
        if (LoginUser != '' || toString(PasswordUser).length >= 6)
        {
            if (LoginUser == 'Denis' && PasswordUser == '78987811')
            {
                this.Session = 2356;
               setTimeout(function ()
                {
                    Kernel.LaunchControlShell();
                }, 5000);
                return true;
            }            
            else
            {
                return false;
            }
        }
    }

    LaunchControlShell()
    {
        document.getElementsByTagName('next-user')[0].remove();
        // Прогружаю код для элементов на карте сети
        var LoadedScriptElementMap = document.createElement('script');
        LoadedScriptElementMap.setAttribute('src', '/JsWebCompanent/ElementMap.js')         
        var ServerElementMap = document.createElement('element-map');
        ServerElementMap.setAttribute('id', '127.0.0.1');
        ServerElementMap.setAttribute('DeviceType', 'Server');
        ServerElementMap.setAttribute('ParentDevice', 'Parent');
        document.body.append(ServerElementMap);
        document.head.append(LoadedScriptElementMap);  
    }
}

var Kernel;

document.addEventListener('DOMContentLoaded', function ()
{
    Kernel = new KernelCode();
});

