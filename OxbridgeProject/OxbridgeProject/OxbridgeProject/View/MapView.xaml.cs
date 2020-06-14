using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using Xamarin.Forms;
using Xamarin.Forms.Xaml;

namespace OxbridgeProject.View
{
    [XamlCompilation(XamlCompilationOptions.Compile)]
    public partial class MapView : ContentPage
    {
        public MapView()
        {
            InitializeComponent();
        }

        private async void logout_clicked(object sender, EventArgs e)
        {
            await Navigation.PushAsync(new LoginView());
            //adding comment to comit
        }

        private void Button_Clicked(object sender, EventArgs e)
        {

        }
    }
} 