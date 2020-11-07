/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ProgramGameTebakAngka;

import java.util.Random;
import java.util.Scanner;

/**
 *
 * @author User
 */
public class TebakAngka {
    int AngkaTebak;
    int AngkaAsing;
    
    void menebak(){
    Random random = new Random();
    this.AngkaAsing = random.nextInt(101);
     System.out.println("Hai... Nama saya Mr. Lappie, saya telah memilih bilangan bulat secara acak antara 0 s/d\n" + "100. Silahkan ditebak ya!!!" );
     
     do{
      Scanner Angka =  new Scanner(System.in);
      System.out.println("Angka Tebakan Anda = ");
      this.AngkaTebak = Angka.nextInt();
      
      if(AngkaTebak > AngkaAsing){
          System.out.println("Hehehe… Bilangan tebakan anda terlalu besar");
      }else if(AngkaTebakan < AngkaPasang){
           System.out.println("Hehehe… Bilangan tebakan anda terlalu kecil");
      }else{
           System.out.println("Yeeee… Bilangan tebakan anda BENAR :-)");
           break;
      }
     }while(AngkaTebakan != AngkaAsing);
    }
}