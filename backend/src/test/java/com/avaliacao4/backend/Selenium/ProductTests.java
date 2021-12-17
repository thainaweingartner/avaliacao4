package com.avaliacao4.backend.Selenium;

import org.junit.Test;
import org.junit.Before;
import org.junit.After;
import org.openqa.selenium.*;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

import java.util.*;

public class ProductTests {
    private ChromeDriver driver;
    private Map<String, Object> vars;
    JavascriptExecutor js;

    @Before
    public void setUp() {
        driver = new ChromeDriver();
    }

    @After
    public void tearDown() {
        driver.quit();
    }

    @Test
    public void addSupplier() {
        driver.get("http://localhost:3000/fornecedores");
        driver.manage().window().setSize(new Dimension(1920, 1055));
        driver.findElement(By.name("add-button")).click();
        driver.findElement(By.name("name")).click();
        driver.findElement(By.name("name")).sendKeys("Xiomi");
        driver.findElement(By.name("phone")).sendKeys("74308302880");
        driver.findElement(By.cssSelector(".chakra-modal__footer > .css-exvdkj")).click();
    }

    @Test
    public void addProductType() {
        driver.get("http://localhost:3000/");
        driver.manage().window().setSize(new Dimension(1920, 1055));
        driver.findElement(By.linkText("Tipos de Produtos")).click();
        driver.findElement(By.name("add-button")).click();
        driver.findElement(By.name("name")).click();
        driver.findElement(By.name("name")).sendKeys("Teclado");
        driver.findElement(By.cssSelector(".chakra-modal__footer > .css-exvdkj")).click();
    }

}
