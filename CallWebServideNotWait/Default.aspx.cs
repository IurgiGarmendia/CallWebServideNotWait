using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Net.Http;
using Newtonsoft.Json;
using System.Web.Script.Serialization;
using System.Text;

public partial class _Default : Page
{
    public string Name { get; set; }
    public string Credits { get; set; }
    protected void Page_Load(object sender, EventArgs e)
    {
        Name = "Iurgi";
        Credits = "Garmendia";
    }

    protected void Button1_Click(object sender, EventArgs e)
    {
        //HttpClient client = new HttpClient();
        //var json = new JavaScriptSerializer().Serialize(account);
        //var result = client.PostAsync("http://app/xyz", new StringContent(
        //    JsonConvert.SerializeObject(account),
        //    Encoding.UTF8,
        //    "application/json")
        //    ).Result;

        //var data = result.Content.ReadAsStringAsync().Result;
    }

    protected void Button1_Click1(object sender, EventArgs e)
    {
        string izena = "Iurgi Garmendia";
        Page.ClientScript.RegisterStartupScript(this.GetType(), "CallMyFunction", "JqueryAjaxCall('"+izena+"')", true);
    }
}