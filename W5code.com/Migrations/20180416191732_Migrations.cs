using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace W5code.Migrations
{
    public partial class Migrations : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "PostDate",
                table: "Community",
                nullable: true,
                oldClrType: typeof(DateTime));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<DateTime>(
                name: "PostDate",
                table: "Community",
                nullable: false,
                oldClrType: typeof(string),
                oldNullable: true);
        }
    }
}
