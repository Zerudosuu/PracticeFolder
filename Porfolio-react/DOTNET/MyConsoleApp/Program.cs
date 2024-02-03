using System;
using System.Collections.Generic;

class Program
{
    public static void Main()
    {
        int totalOdd = 0;
        int totalEven = 0;

        List<int> creatureOdd = new List<int>();
        List<int> creatureEven = new List<int>();

        Console.Write("Please Enter the number of Creatures: ");
        int numberOfCreatures = Convert.ToInt32(Console.ReadLine());

        Console.WriteLine($"Please enter their numbers, maximum of {numberOfCreatures}:");
        for (int i = 1; i <= numberOfCreatures; i++)
        {
            int Number = Convert.ToInt32(Console.ReadLine());

            if (Number % 2 != 0)
            {
                creatureOdd.Add(Number);
            }
            else
            {
                creatureEven.Add(Number);
            }
        }

        // Sorting sort = new Sorting();

        // sort.SortElement(creatureEven);
        // sort.SortElement(creatureOdd);

        foreach (int cEven in creatureEven)
        {
            totalEven += cEven;
        }
        foreach (int cOdd in creatureOdd)
        {
            totalOdd += cOdd;
        }

        // sort.PrintElements(creatureEven);
        Console.WriteLine(creatureEven.Sort())
        Console.WriteLine($"Total of Even Creatures: {totalEven}");
        // sort.PrintElements(creatureOdd);
        Console.WriteLine(creatureOdd.Sort())
        Console.WriteLine($"Total of Odd Creatures: {totalOdd}");
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
