/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ProgramGameTebakAngkaWithPoin;
import java.util.Random;
import java.util.Scanner;
/**
 *
 * @author User
 */
public class TebakanAngkaWithPoin {
     int AngkaTebak;
    int AngkaAsing;
    int score = 100;
    int bonus = 5;
    void menebak(){
    Random random = new Random();
    this.AngkaAsing = random.nextInt(101);
     System.out.println("Hai... Nama saya Mr. Lappie, saya telah memilih bilangan bulat secara acak antara 0 s/d\n" + "100. Silahkan ditebak ya!!!" );
     do{
      Scanner Angka =  new Scanner(System.in);
      System.out.println("Angka Tebakan Anda = ");
      this.AngkaTebak = Angka.nextInt();
      
      if(score == 0){
      System.out.println("Game Over alias Bubar!");
      break;
      }
      
      if(AngkaTebak > AngkaAsing){
          System.out.println("Hehehe… Bilangan tebakan anda terlalu besar");
          score -= 2;
          bonus -= 1;
      }else if(AngkaTebak < AngkaAsing){
           System.out.println("Hehehe… Bilangan tebakan anda terlalu kecil");
           score -= 2;
           bonus -= 1;
      }else{
           System.out.println("Yeeee… Bilangan tebakan anda BENAR :-)");
           if(bonus > 0){
               score += 50;
               System.out.println(score);
           }
            System.out.println("Total Nilai = "+score);
           break;
      }
     }while(AngkaTebak != AngkaAsing);
    }
}