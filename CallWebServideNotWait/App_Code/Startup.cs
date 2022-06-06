using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(CallWebServideNotWait.Startup))]
namespace CallWebServideNotWait
{
    public partial class Startup {
        public void Configuration(IAppBuilder app) {
            ConfigureAuth(app);
        }
    }
}
