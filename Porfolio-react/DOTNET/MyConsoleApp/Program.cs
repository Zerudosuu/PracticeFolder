using System;
using System.Collections.Generic;
using System.Security.Principal;

class Program
{
    private int total;

    public void Run()
    {
        List<int> creatureOdd = new List<int>();
        List<int> creatureEven = new List<int>();

        Console.Write("Please Enter the number of Creatures: ");
        int numberOfCreatures = Convert.ToInt32(Console.ReadLine());

        Console.WriteLine($"Please enter their numbers, maximum of {numberOfCreatures}:");
        for (int i = 1; i <= numberOfCreatures; i++)
        {
            int number = Convert.ToInt32(Console.ReadLine());
            (number % 2 == 0 ? creatureEven : creatureOdd).Add(number);
        }

        creatureEven.Sort();
        creatureOdd.Sort();

        Sort_Total(creatureEven);
        Console.WriteLine($"\nTotal of Even Creatures: {total}");

        total = 0;

        Sort_Total(creatureOdd);
        Console.WriteLine($"\nTotal of Odd Creatures: {total}");
    }

    void Sort_Total(List<int> list)
    {
        foreach (int i in list)
        {
            Console.Write(i + " ");
            total += i;
        }
    }

    public static void Main()
    {
        Program prog = new Program();
        prog.Run();
    }
}




// class Sorting
// {
//     public void SortElement(List<int> list)
//     {
//         int n = list.Count;
//         bool swapped;

//         do
//         {
//             swapped = false;
//             for (int i = 0; i < n - 1; i++)
//             {
//                 if (list[i] > list[i + 1])
//                 {
//                     int temp = list[i];
//                     list[i] = list[i + 1];
//                     list[i + 1] = temp;
//                     swapped = true;
//                 }
//             }
//         } while (swapped);
//     }

//     public void PrintElements(List<int> list)
//     {
//         foreach (int item in list)
//         {
//             Console.Write(item + " ");
//         }
//         Console.WriteLine();
//     }
// }
