import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Recipe } from '../recipes.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.page.html',
  styleUrls: ['./recipe-details.page.scss'],
})
export class RecipeDetailsPage implements OnInit, OnDestroy {

  loadedRecipe: Recipe;

  // here we are using agular defaul redirect service for activated route
  constructor(
    private activatedRoute: ActivatedRoute,
    private recipeServices: RecipesService,
    private router: Router,
    private alertController: AlertController) { }

  ngOnInit() {
    console.log('ngOnInIt');
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if(!paramMap.has('recipeId')){
        return;
      }
      const recipeId = paramMap.get('recipeId');
      this.loadedRecipe = this.recipeServices.getRecipe(recipeId);
    });
  }

  ionViewWillEnter(){
    console.log('ionViewWillEnter');
  }

  ionViewDidEnter(){
    console.log('ionViewDidEnter');
  }

  ionViewWillLeave(){
    console.log('ionViewWillLeave');
  }

  ionViewDidLeave(){
    console.log('ionViewDidLeave');
  }

  ngOnDestroy(){
   console.log('ngOnDestroy');
  }

  onDeleteRecipe(){
    this.alertController.create({
      header: 'Are you sure?',
      message: 'You want to delete this recipe?',
      buttons:[{
        text: 'Cancel',
        role: 'cancel'
      },
      {
        text: 'Delete',
        handler: () => {
          this.recipeServices.deleteRecipe(this.loadedRecipe.id);
          this.router.navigate(['/recipes']);
        }
      }
    ]
    }).then(alertEle => {
      alertEle.present();
    });
  }
}
