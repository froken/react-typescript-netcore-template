using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.SpaServices.Webpack;
using Microsoft.Extensions.FileProviders;
using System.IO;

namespace React.Todo.Extensions
{
    public static class StartupExtensions
    {
        public static void UseHotModuleReplacement(this IApplicationBuilder app)
        {
            app.UseWebpackDevMiddleware(new WebpackDevMiddlewareOptions
            {
                ConfigFile = "webpack.config.js",
                HotModuleReplacement = true,
                ReactHotModuleReplacement = true,
            });

            app.UseStaticFiles(new StaticFileOptions()
            {
                FileProvider = new PhysicalFileProvider(
                    Path.Combine(Directory.GetCurrentDirectory(), @"wwwroot")),
                RequestPath = new PathString(""),
                ServeUnknownFileTypes = true
            });
        }
    }
}
