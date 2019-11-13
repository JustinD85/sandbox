using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Newtonsoft.Json;

namespace hello_world_web
{
    public class Startup
    {
        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseRouting();

            app.UseEndpoints(endpoints =>
            {

                endpoints.MapGet("/", async context =>
                {
                    await context.Response.WriteAsync(JsonConvert.SerializeObject(new Response[] {
                        new Response("Scavenger", "Baal"),new Response("Government", "Baal"),
                        new Response("Scientists", "Baal"), new Response("Engineers", "Baal"),
                        new Response("Children of Baal", "Baal")}));
                });
            });
        }
    }

    class Response
    {
        public string name;
        public string legion;
        public Response(string name, string legion)
        {
            this.name = name;
            this.legion = legion;
        }
    }
}
