package com.avaliacao4.backend.Selenium;

import org.junit.Test;
import org.junit.Before;
import org.junit.After;
import org.openqa.selenium.*;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

import java.util.*;

public class ProductTests {
    private WebDriver driver;
    private Map<String, Object> vars;
    JavascriptExecutor js;

    @Before
    public void setUp() {
        System.setProperty("webdriver.chrome.driver", "drivers/chromedriver.exe");
        driver = new ChromeDriver();
        js = (JavascriptExecutor) driver;
        vars = new HashMap<String, Object>();
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

    @Test
    public void crudProduct() {
        driver.get("http://localhost:3000/");
        driver.manage().window().setSize(new Dimension(1920, 1055));
        driver.findElement(By.name("add-button")).click();
        driver.findElement(By.name("name")).click();
        driver.findElement(By.name("name")).click();
        driver.findElement(By.name("name")).sendKeys("Redmi Note 10");
        driver.findElement(By.cssSelector(".chakra-select__wrapper:nth-child(4) > .chakra-select")).click();
        driver.findElement(By.cssSelector(".chakra-select__wrapper:nth-child(6) > .chakra-select")).click();
        {
            WebElement dropdown = driver.findElement(By.cssSelector(".chakra-select__wrapper:nth-child(6) > .chakra-select"));
            dropdown.findElement(By.xpath("//option[. = 'Xiomi']")).click();
        }
        {
            WebElement element = driver.findElement(By.name("quantity"));
            Actions builder = new Actions(driver);
            builder.moveToElement(element).clickAndHold().perform();
        }
        {
            WebElement element = driver.findElement(By.name("quantity"));
            Actions builder = new Actions(driver);
            builder.moveToElement(element).perform();
        }
        {
            WebElement element = driver.findElement(By.name("quantity"));
            Actions builder = new Actions(driver);
            builder.moveToElement(element).release().perform();
        }
        driver.findElement(By.name("quantity")).click();
        driver.findElement(By.name("quantity")).sendKeys("10");
        driver.findElement(By.name("salePrice")).sendKeys("1200");
        driver.findElement(By.name("purchasePrice")).sendKeys("500");
        driver.findElement(By.cssSelector(".chakra-modal__footer > .css-exvdkj")).click();
        driver.findElement(By.cssSelector(".css-0:nth-child(5) > .css-12y4u6o:nth-child(7) > svg")).click();
        driver.findElement(By.name("name")).click();
        driver.findElement(By.name("name")).click();
        driver.findElement(By.name("name")).click();
        driver.findElement(By.name("name")).sendKeys("Redmi Note 10 Pro");
        driver.findElement(By.id("chakra-modal--body-2")).click();
        driver.findElement(By.name("quantity")).click();
        driver.findElement(By.name("quantity")).sendKeys("15");
        driver.findElement(By.cssSelector(".chakra-modal__footer > .css-exvdkj")).click();
        driver.findElement(By.cssSelector(".css-0:nth-child(5) > .css-12y4u6o:nth-child(8) path:nth-child(2)")).click();
    }
}
